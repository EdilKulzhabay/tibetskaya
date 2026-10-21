import React from "react";
import LegalDocumentPage from "./partnerDocs/LegalDocumentPage";
import partnerPrivacy from "./partnerDocs/partnerPrivacyText";

/** Политика конфиденциальности приложения «Тибетская Партнер» — ссылка из раздела «Документы» приложения */
export default function PartnerPrivacyPolicy() {
    return <LegalDocumentPage doc={partnerPrivacy} />;
}
