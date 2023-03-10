import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from './TopPageComponent.module.css';
import { Advantages, Card, HhData, Htag, Product, Skills, Sort, Tag } from "../../components";
import { PageCategory } from "../../interfaces/page.interface";
import { SortEnum } from "../../components/Sort/Sort.props";
import { useEffect, useReducer } from "react";
import { sortReducer } from "./sort.reducer";

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {

    const [{ products: sortedProducts, sort}, dispathSort] = useReducer(sortReducer, { products, sort: SortEnum.Rating });

    const setSort = (sort: SortEnum) => {
      dispathSort({ type: sort });
    };

    //Для перерендера продуктов
    useEffect(() => {
      dispathSort({ type: 'reset', initialState: products });
    }, [products]);

    return(
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <Htag tag='h1'>{page.title}</Htag>
          {products && <Tag color="grey" size="large" >{products.length}</Tag>}
          <Sort sort={sort} setSort={setSort}/>
        </div>
        <div>
          {sortedProducts && sortedProducts.map(p => (<Product layout key={p._id} product={p} />))}
        </div>
        <div className={styles.hhTitle}>
          <Htag tag='h2'>Вакансии — {page.category}</Htag>
          <Tag color="red" size="large" >hh.ru</Tag>
        </div>
        {firstCategory == PageCategory.Courses && <HhData {...page.hh} />}
        {page.advantages && page.advantages.length > 0 && <Advantages advantages={page.advantages} />}
        {page.seoText && <div className={styles.seoText} dangerouslySetInnerHTML={{ __html: page.seoText }} />}
        <Skills tags={page.tags}/>
      </div>
  );
};