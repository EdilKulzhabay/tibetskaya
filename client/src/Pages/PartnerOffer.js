import React from "react";
import LegalDocumentPage from "./partnerDocs/LegalDocumentPage";
import partnerOffer from "./partnerDocs/partnerOfferText";

/** Публичная оферта приложения «Тибетская Партнер» — ссылка из раздела «Документы» приложения */
export default function PartnerOffer() {
    return <LegalDocumentPage doc={partnerOffer} />;
}
