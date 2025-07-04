import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Backstage', function () {

    let backstage_string: string = "Backstage passes to a TAFKAL80ETC concert";
    it(`${backstage_string} quality raises with time`, () => {
        const gildedRose = new GildedRose([new Item(backstage_string, 20, 0)]);
        expect(gildedRose.updateQuality()).to.deep.equal([new Item(backstage_string, 19, 1)]);
    });
    it(`${backstage_string} quality raises with 2 when sellIn <= 10`, () => {
        const gildedRose = new GildedRose([new Item(backstage_string, 9, 2), new Item(backstage_string, 10, 2)]);
        expect(gildedRose.updateQuality()).to.deep.equal([new Item(backstage_string, 8, 4), new Item(backstage_string, 9, 4)]);
    });
    it(`${backstage_string} quality raises with 3 when sellIn <= 5`, () => {
        const gildedRose = new GildedRose([new Item(backstage_string, 4, 2), new Item(backstage_string, 5, 2)]);
        expect(gildedRose.updateQuality()).to.deep.equal([new Item(backstage_string, 3, 5), new Item(backstage_string, 4, 5)]);
    });
    it(`${backstage_string} quality drops to 0 after concert?`, () => {
        const gildedRose = new GildedRose([new Item(backstage_string, 0, 10), new Item(backstage_string, -1, 10)]);
        expect(gildedRose.updateQuality()).to.deep.equal([new Item(backstage_string, -1, 0), new Item(backstage_string, -2, 0)]);
    });
});

describe('Sulfuras', function () {

    let sulfuras: string = 'Sulfuras, Hand of Ragnaros';
    it('Nothing changes with Sulfuras', () => {
        const gildedRose = new GildedRose([new Item(sulfuras, 20, 0), new Item(sulfuras, -2, 50)]);
        expect(gildedRose.updateQuality()).to.deep.equal([new Item(sulfuras, 20, 0), new Item(sulfuras, -2, 50)]);
    });

});

describe('Aged Brie', function () {

    let brie: string = 'Aged Brie';
    it('Aged Brie\'s quality raises with age', () => {
        const gildedRose = new GildedRose([new Item(brie, 20, 0), new Item(brie, 10, 50)]);
        expect(gildedRose.updateQuality()).to.deep.equal([new Item(brie, 19, 1), new Item(brie, 9, 50)]);
    });
    it('Aged Brie\'s quality raises twice as fast, past its sell date', () => {
        const gildedRose = new GildedRose([new Item(brie, 0, 0), new Item(brie, -1, 0), new Item(brie, -1, 50)]);
        expect(gildedRose.updateQuality()).to.deep.equal([new Item(brie, -1, 2), new Item(brie, -2, 2), new Item(brie, -2, 50)]);
    });

});

describe('Normal item', function () {

    it('Quality decreases with age', () => {
        const gildedRose = new GildedRose([new Item('bread', 20, 0), new Item('bread', 20, 10)]);
        expect(gildedRose.updateQuality()).to.deep.equal([new Item('bread', 19, 0), new Item('bread', 19, 9)]);
    });
    it('Quality decreases twice as fast, past its sell date', () => {
        const gildedRose = new GildedRose([new Item('bread', 0, 10), new Item('bread', -1, 10), new Item('bread', -1, 50)]);
        expect(gildedRose.updateQuality()).to.deep.equal([new Item('bread', -1, 8), new Item('bread', -2, 8), new Item('bread', -2, 48)]);
    });
});
