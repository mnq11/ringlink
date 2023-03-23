import React from 'react';
import { useTranslation } from 'react-i18next';

const Services = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t('Services')}</h1>
        </div>
    );
};

export default Services;
