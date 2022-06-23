// Type definitions for react-gtm-consent-module 1.0.1
// Project: https://github.com/omar-diop/react-gtm-consent

declare const TagManager: {
  dataLayer: (dataLayerArgs: DataLayerArgs) => void;
  initialize: (tagManagerArgs: TagManagerArgs) => void;
};

export interface TagManagerArgs extends DataLayerArgs {
  /**
   * GTM id, must be something like GTM-000000.
   */
  gtmId: string;
  /**
   * Additional events such as 'gtm.start': new Date().getTime(),event:'gtm.js'.
   */
  events?: object | undefined;
  /**
   * Used to set environments.
   */
  auth?: string | undefined;
  /**
   * Used to set environments, something like env-00.
   */
  preview?: string | undefined;
  /**
   * Object that contains all of the options available for Google Tag Manager Consent Mode
   */
  consentSettings?: ConsentArgs;
}

export interface DataLayerArgs {
  /**
   * Object that contains all of the information that you want to pass to Google Tag Manager.
   */
  dataLayer?: object | undefined;
  /**
   * Custom name for dataLayer object.
   */
  dataLayerName?: string | undefined;
}

export interface ConsentArgs {
  ad_storage?: "denied" | "granted";
  analytics_storage?: "denied" | "granted";
  functional_storage?: "denied" | "granted";
  personalization_storage?: "denied" | "granted";
  security_storage?: "denied" | "granted";
  wait_for_update?: number;
}

export default TagManager;
