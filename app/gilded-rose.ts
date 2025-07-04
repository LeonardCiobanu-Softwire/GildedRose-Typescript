export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}
export class GildedRose {
    items: Array<Item>;
    
    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    min(a: number, b: number): number {
        if (a < b) return a;
        return b;
    }
    
    max(a: number, b: number): number {
        if (a > b) return a;
        return b;
    }

    updateBackstage(item: Item): Item {
        item.sellIn--;
        if (item.sellIn < 0) {
            item.quality = 0;
        } else if (item.sellIn < 5) {
            item.quality = this.min(item.quality + 3, 50);
        } else if (item.sellIn < 10) {
            item.quality = this.min(item.quality + 2, 50);
        } else {
            item.quality = this.min(item.quality + 1, 50);
        }
        return item;
    }

    updateQuality() {

        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].name === 'Sulfuras, Hand of Ragnaros') {
                continue;
            } else if (this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert') {
                this.items[i] = this.updateBackstage(this.items[i]);
                continue;
            } else if (this.items[i].name === 'Aged Brie') {
                this.items[i].sellIn--;
                this.items[i].quality = this.min(this.items[i].quality + 1, 50);
                if (this.items[i].sellIn < 0)
                    this.items[i].quality = this.min(this.items[i].quality + 1, 50);
                continue;
            } else {
                this.items[i].sellIn--;
                if (this.items[i].quality > 0) {
                    this.items[i].quality--;
                    if (this.items[i].sellIn < 0)
                        this.items[i].quality = this.max(this.items[i].quality - 1, 0);
                }
                continue;
            }
        }

        return this.items;
    }
}
