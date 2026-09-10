import React from "react";
import { Helmet } from "react-helmet";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import adsApiSpec from "../openapi/adsApiSpec";

export default function AdsApiDocs() {
    return (
        <>
            <Helmet>
                <title>Tibetskaya — Ads Partner API</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            <SwaggerUI spec={adsApiSpec} />
        </>
    );
}
