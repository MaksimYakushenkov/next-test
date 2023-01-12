import { PageCategory, PageModel } from "../../interfaces/page.interface";
import { ProductModel } from "../../interfaces/product.interface";


export interface TopPageComponentProps extends Record<string, unknown> {
  firstCategory: PageCategory;
  page: PageModel;
  products: ProductModel[];
}