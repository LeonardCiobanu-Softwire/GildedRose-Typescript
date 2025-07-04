import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';
// Add a master test here
const item_list: Item[] = [
    new Item('Ale', 10, 10),
    new Item('Good Ale', 20, 25),
    new Item('Bad Ale', 30, 5),
    new Item('Very Bad Ale', 2, -20),
    new Item('Very Bad Beer', 1, -30),
    new Item('Do not drink this Beer', 0, -40),
    new Item('Very Bad Wine', 20, -20),
    new Item('Bread', 4, 6),
    new Item('Old Bread', 0, 0),
    new Item('Aged Brie', 10, 10),
    new Item('Sulfuras', 10, 10),
    new Item('Sulfuras1', 60, 60),
    new Item('Sulfuras, Hand of Ragnaros', 30, 40),
    new Item('Fictional Product :))', -5, 40),
    new Item('Backstage passes', 40, 40),
    new Item('Backstage passes2', 60, 60),
    new Item('Backstage passes to a TAFKAL80ETC concert', 40, 40),
    new Item('Backstage passes to a TAFKAL80ETC concert', 1, 40),
    new Item('Backstage passes to a TAFKAL80ETC concert', 11, 40),
];

let once_aged_item_list: Item[] = [
    new Item('Ale', 9, 9),
    new Item('Good Ale', 19, 24),
    new Item('Bad Ale', 29, 4),
    new Item('Very Bad Ale', 1, -20),
    new Item('Very Bad Beer', 0, -30),
    new Item('Do not drink this Beer', -1, -40),
    new Item('Very Bad Wine', 19, -20),
    new Item('Bread', 3, 5),
    new Item('Old Bread', -1, 0),
    new Item('Aged Brie', 9, 11),
    new Item('Sulfuras', 9, 9),
    new Item('Sulfuras1', 59, 59),
    new Item('Sulfuras, Hand of Ragnaros', 30, 40),
    new Item('Fictional Product :))', -6, 38),
    new Item('Backstage passes', 39, 39),
    new Item('Backstage passes2', 59, 59),
    new Item('Backstage passes to a TAFKAL80ETC concert', 39, 41),
    new Item('Backstage passes to a TAFKAL80ETC concert', 0, 43),
    new Item('Backstage passes to a TAFKAL80ETC concert', 10, 41),
];

let twice_aged_item_list: Item[] = [
    new Item('Ale', 8, 8),
    new Item('Good Ale', 18, 23),
    new Item('Bad Ale', 28, 3),
    new Item('Very Bad Ale', 0, -20),
    new Item('Very Bad Beer', -1, -30),
    new Item('Do not drink this Beer', -2, -40),
    new Item('Very Bad Wine', 18, -20),
    new Item('Bread', 2, 4),
    new Item('Old Bread', -2, 0),
    new Item('Aged Brie', 8, 12),
    new Item('Sulfuras', 8, 8),
    new Item('Sulfuras1', 58, 58),
    new Item('Sulfuras, Hand of Ragnaros', 30, 40),
    new Item('Fictional Product :))', -7, 36),
    new Item('Backstage passes', 38, 38),
    new Item('Backstage passes2', 58, 58),
    new Item('Backstage passes to a TAFKAL80ETC concert', 38, 42),
    new Item('Backstage passes to a TAFKAL80ETC concert', -1, 0),
    new Item('Backstage passes to a TAFKAL80ETC concert', 9, 43),
];

let three_times_aged_item_list: Item[] = [
    new Item('Ale', 7, 7),
    new Item('Good Ale', 17, 22),
    new Item('Bad Ale', 27, 2),
    new Item('Very Bad Ale', -1, -20),
    new Item('Very Bad Beer', -2, -30),
    new Item('Do not drink this Beer', -3, -40),
    new Item('Very Bad Wine', 17, -20),
    new Item('Bread', 1, 3),
    new Item('Old Bread', -3, 0),
    new Item('Aged Brie', 7, 13),
    new Item('Sulfuras', 7, 7),
    new Item('Sulfuras1', 57, 57),
    new Item('Sulfuras, Hand of Ragnaros', 30, 40),
    new Item('Fictional Product :))', -8, 34),
    new Item('Backstage passes', 37, 37),
    new Item('Backstage passes2', 57, 57),
    new Item('Backstage passes to a TAFKAL80ETC concert', 37, 43),
    new Item('Backstage passes to a TAFKAL80ETC concert', -2, 0),
    new Item('Backstage passes to a TAFKAL80ETC concert', 8, 45),
];

describe('Master Golden Test', () => {
    let gildedRose = new GildedRose(item_list);
    let items: Item[];
    it('once aged', function() {
        gildedRose.updateQuality();
        expect(gildedRose.items).to.deep.equal(once_aged_item_list);
    });

    it('twice aged', function() {
        gildedRose.updateQuality();
        expect(gildedRose.items).to.deep.equal(twice_aged_item_list);
    });
    it('three times aged', function() {
        gildedRose.updateQuality();
        expect(gildedRose.items).to.deep.equal(three_times_aged_item_list);
    });
    
});
