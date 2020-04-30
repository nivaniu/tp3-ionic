import {Ingredient} from './ingredient';
import {Units} from '../../enums/units/units.enum';

describe('Ingredient', () => {
    it('should create an instance', () => {
        expect(new Ingredient('name', 'quantity', Units.GRM)).toBeTruthy();
    });
});
