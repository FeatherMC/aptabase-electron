type AptabaseOptions = {
    host?: string;
};
declare function initialize(appKey: string, options?: AptabaseOptions): Promise<void>;
declare function trackEvent(eventName: string, props?: Record<string, string | number | boolean>): Promise<void>;

export { AptabaseOptions, initialize, trackEvent };
