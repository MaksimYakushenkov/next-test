import { LayoutProps } from './Layout.props';
import styles from './Layout.module.css';
import cn from 'classnames';
import React, { FunctionComponent } from 'react';
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { Footer } from './Footer/Footer';
import { AppContextProvider, AppContextInterface } from '../context/app.context';
import { HandleUp } from '../components';

const Layout = ({ children }: LayoutProps): JSX.Element => {
    
    return(
        <div className={styles.wrapper} >
            <Header className={styles.header} />
            <Sidebar  className={styles.sidebar} />
                <main  className={styles.body}>
                    {children}
                </main>
            <Footer className={styles.footer} />
            <HandleUp />
        </div>
    );
};

export const withLayout = <T extends Record<string, unknown> & AppContextInterface>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
          <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
            <Layout>
                <Component {...props} />
            </Layout>
          </AppContextProvider>
        );
    };
};