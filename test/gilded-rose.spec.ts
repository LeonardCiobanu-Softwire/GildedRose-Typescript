import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Backstage', function () {

    // it('should foo', function() {
    //     const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
    //     const items = gildedRose.updateQuality();
    //     expect(items[0].name).to.equal('fixme');
    // });
    let backstage_string: string = "Backstage passes to a TAFKAL80ETC concert";
    it(`${backstage_string} quality raises with time`, () => {
        const gildedRose = new GildedRose([new Item(backstage_string, 20, 0)]);
        expect(gildedRose.updateQuality()).to.deep.equal([new Item(backstage_string, 19, 1)])
    });
    it(`${backstage_string} quality raises with 2 when sellIn <= 10`, () => {
        const gildedRose = new GildedRose([new Item(backstage_string, 9, 2), new Item(backstage_string, 10, 2)]);
        expect(gildedRose.updateQuality()).to.deep.equal([new Item(backstage_string, 8, 4), new Item(backstage_string, 9, 4)])
    });
    it(`${backstage_string} quality raises with 3 when sellIn <= 5`, () => {
        const gildedRose = new GildedRose([new Item(backstage_string, 4, 2), new Item(backstage_string, 5, 2)]);
        expect(gildedRose.updateQuality()).to.deep.equal([new Item(backstage_string, 3, 5), new Item(backstage_string, 4, 5)])
    });
    it(`${backstage_string} quality drops to 0 after concert?`, () => {
        const gildedRose = new GildedRose([new Item(backstage_string, 0, 10), new Item(backstage_string, -1, 10)]);
        expect(gildedRose.updateQuality()).to.deep.equal([new Item(backstage_string, -1, 0), new Item(backstage_string, -2, 0)])
    });

});
