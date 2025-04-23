declare global {
    interface Window {
        aptabase?: {
            trackEvent: (eventName: string, props?: Record<string, string | number | boolean>) => Promise<void>;
        };
    }
}
declare function trackEvent(eventName: string, props?: Record<string, string | number | boolean>): Promise<void>;

export { trackEvent };
