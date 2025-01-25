import {AnimalListModel} from "./index";
import {AnimalInMemoryGateway} from "../../app/services/AnimalInMemoryGateway";
import {data} from "../../app/services/data";

describe('Model reactivity', () => {
    const model = new AnimalListModel(new AnimalInMemoryGateway());

    it("getting data from gateway", () => {
        model.getAll().subscribe(() => {
            expect(model.getState()).toEqual(data);
        }).unsubscribe();
    });

    it("filtering animals by species", () => {
        const model = new AnimalListModel(new AnimalInMemoryGateway());
        model.getAll().subscribe(() => {
            const catList = model.filterAnimal("Cat");
            expect(catList).toEqual(catList)
        }).unsubscribe();
    })

});