import { TabsConfig } from '../../shared/types/tabsConfig.type';

export const appTabsConfig: TabsConfig[] = [
    {
        path: 'product-list',
        label: 'Products',
        forAdmin: true,
        forUser: true,
    },
    {
        path: 'cart',
        label: 'Cart',
        forAdmin: false,
        forUser: true,
    },
    {
        path: 'order',
        label: 'Orders',
        forAdmin: false,
        forUser: true,
    },
    {
        path: 'admin',
        label: 'Admin',
        forAdmin: true,
        forUser: false,
    },
];
