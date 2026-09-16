// Пример на Node.js/Express. Если бэкенд на другом языке/фреймворке -
// логика та же (принять событие → отправить в Graph API), адаптировать под свой стек.

const express = require('express');
const router = express.Router();

const PIXEL_ID = '4433061166916167'; // тот же ID, что и в клиентском коде

// ВАЖНО: токен НЕ хардкодить. Задать переменную окружения META_CAPI_TOKEN на сервере
// (например в .env файле, который НЕ коммитится в git - добавить .env в .gitignore).
// Значение самого токена - в отдельной строке в чате ниже, не в этом файле.
const ACCESS_TOKEN = process.env.META_CAPI_TOKEN;

// Актуальную версию Graph API проверить в документации Meta for Developers -
// версии меняются, ниже рабочий пример, но перед продакшеном сверить номер версии.
const GRAPH_API_VERSION = 'v21.0';

router.post('/api/track-download', async (req, res) => {
  const { eventName, eventId, fbp, fbc, sourceUrl } = req.body;

  if (!eventName || !eventId) {
    return res.status(400).json({ error: 'eventName и eventId обязательны' });
  }

  if (!ACCESS_TOKEN) {
    console.error('META_CAPI_TOKEN не задан в переменных окружения');
    return res.status(500).json({ error: 'CAPI token not configured' });
  }

  const payload = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId, // обязан совпадать с eventID в клиентском fbq('trackCustom', ...)
        event_source_url: sourceUrl,
        action_source: 'website',
        user_data: {
          client_ip_address: req.ip,
          client_user_agent: req.headers['user-agent'],
          fbp: fbp || undefined,
          fbc: fbc || undefined
        }
      }
    ]
  };

  try {
    const response = await fetch(
      `https://graph.facebook.com/${GRAPH_API_VERSION}/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }
    );

    const result = await response.json();

    if (!response.ok) {
      console.error('Meta CAPI error:', result);
      return res.status(502).json({ error: 'CAPI rejected event', details: result });
    }

    res.json(result);
  } catch (err) {
    console.error('CAPI send failed', err);
    res.status(500).json({ error: 'CAPI send failed' });
  }
});

module.exports = router;
