import React from "react";

import t from "tcomb-validation";

import {
    Route,
    Switch
}
from "react-router-dom";


export interface Props {
    pages: Array<IPage>;
}

export interface IPage {
    exact?: boolean;
    path: string;
    component?: React.FC<any>;
    pages?: Array<IPage>;
}

interface IPageFlatten extends Omit<IPage, "pages" | "component"> {
    component: Exclude<IPage["component"], undefined>;
}

const Pages: React.FC<Props> = ({ pages }) => {
    
    const flattendPages = flattenPages(pages);

    return (
        <Switch>
            {flattendPages.map((route: IPageFlatten, index: number) => (
                <Route 
                {...route}
                key={index}/>
            ))}
        </Switch>
    )
}

function flattenPages(pages: Array<IPage>): Array<IPageFlatten> {
    
    const flattendPages: Array<IPageFlatten> = [];

    const recursive = (pages: Array<IPage>, path?: string) => {

        const hasNestedPage = (pages: IPage["pages"]) => {
            
            const NestedPageTcombType = t.Array;

            return t.is(pages, NestedPageTcombType);
        };
        
        for (const page of pages) {
    
            if (hasNestedPage(page.pages)) {
                recursive(page.pages as Array<IPage>, page.path);
            }
            else {

                if (page.component) {
                    
                    const flattendPage: IPageFlatten = {
                        path: `${path || ""}${page.path}`,
                        component: page.component
                    }

                    if (page.exact) {
                        flattendPage.exact = page.exact;
                    }

                    flattendPages.push(flattendPage);
                }
            }
        }
    }

    recursive(pages);

    return flattendPages;
}

export default Pages;