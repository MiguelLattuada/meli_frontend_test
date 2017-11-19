/**
 * Store breadcrumb to show in a singleton
 * 
 * @export
 * @class BreadcrumbService
 */
export class BreadcrumbService {
    static get instance() {
        if (!this._instance) this._instance = new BreadcrumbService();
        return this._instance;
    }

    constructor() {
        this._breadcrumb = [];
        this._subscribers = [];
    }

    set breadcrumb(breadcrumb) {
        this._breadcrumb = breadcrumb;
        this.emit(this._breadcrumb);
    }

    get breadcrumb() {
        return this._breadcrumb;
    }

    // Subscriptions related logic
    /**
     * Add a subscriber
     * 
     * @param {any} subscriber 
     * @memberof BreadcrumbService
     */
    subscribe(subscriber) {
        this._subscribers.push(subscriber);
    }
    /**
     * Remove all subscribers
     * 
     * @memberof BreadcrumbService
     */
    dispose() {
        this._subscribers = [];
    }
    /**
     * Share value between subscribers
     * 
     * @param {any} value 
     * @memberof BreadcrumbService
     */
    emit(value) {
        this._subscribers.forEach(sub => {
            sub(value);
        });
    }
}