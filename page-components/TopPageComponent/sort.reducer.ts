import { SortEnum } from "../../components/Sort/Sort.props";
import { PageModel } from "../../interfaces/page.interface";
import { ProductModel } from "../../interfaces/product.interface";

// Добавляем {type: 'reset', initialState: PageModel[]} для обновления products при переходе по страницам
// Если будут в дальнейшем пэйлоуды можно писать так:
export type SortActions = { type: SortEnum.Rating } | { type: SortEnum.Price } | { type: 'reset', initialState: ProductModel[] };

// Но можно и так написать:
//export type SortActions = { type: SortEnum };

export interface SortReducerState {
  sort: SortEnum;
  products: ProductModel[];
}

export const sortReducer = (state: SortReducerState, action: SortActions): SortReducerState => {
  switch(action.type) {
    case SortEnum.Rating:
      return {
        sort: SortEnum.Rating,
        products: state.products.sort((a, b) => a.initialRating > b.initialRating ? -1 : 1)
      };
    case SortEnum.Price:
      return {
        sort: SortEnum.Price,
        products: state.products.sort((a, b) => a.price > b.price ? 1 : -1)
      };
    case 'reset':
      return {
        sort: SortEnum.Rating,
        //Чтобы получить доступ к initialState, нужно прописывать action.
        products: action.initialState.sort((a, b) => a.initialRating > b.initialRating ? -1 : 1)
      };
    default:
      throw new Error('Неверный тип сортировки');
  }
};