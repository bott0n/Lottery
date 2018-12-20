"use strict";

/**
 * Bunch of useful functions and code snippets.
 */
class Utilities {
    /**
     * Return a random integer between a given range.
     * @param {number} min - Lower bound of the range
     * @param {number} max - Upper bound of the range
     */
    static random(min, max) {
        return (Math.floor(Math.random() * (Math.floor(max) - Math.floor(min))) + Math.floor(min));
    }
}

/**
 * A simple implementation of the `localStorage` API.
 */
class Storage {
    /**
     * Initializing the `localStorage` object.
     */
    constructor() {
        this.storage = window.localStorage;
    }

    /**
     * Clear all data within the `localStorage`.
     */
    clearStorage() {
        this.storage.clear();
    }

    /**
     * Create a new data item or update an existing one with new value.
     * @param {string} key   - Name of the data item
     * @param {string} value - The new value for the item
     */
    saveData(key, value) {
        this.storage.setItem(key, value);
    }

    /**
     * Get the data from the corresponding data item. 
     * If the item did not exist, return the alternative instead.
     * @param {string} key   - Name of the data item
     * @param {String} [alt] - Alternative data for the item
     * @returns {string}
     */
    getData(key, alt) {
        let value = this.storage.getItem(key);
        if (value) {
            return value;
        } else if (alt) {
            this.saveSetting(key, alt);
            return this.getSetting(key);
        } else {
            return null;            
        }
    }

    /**
     * Remove the data item from the `localStorage`.
     * @param {string} key - Name of the data item
     */
    removeData(key) {
        this.storage.removeItem(key);
    }
}
