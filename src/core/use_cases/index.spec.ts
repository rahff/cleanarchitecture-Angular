

import {animalFilter} from "./index";
import {catList, data} from "../../app/services/data";


// Useless, it's just for demo
describe('Filter Animals', () => {
    it("we can filter animals by their species", () => {
        const catFilter = animalFilter("Cat")
        const result = catFilter(data)
        expect(result).toEqual(catList)
    })
});