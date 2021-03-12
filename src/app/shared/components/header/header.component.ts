import { LoginService } from '../../../core/services';
import { RouteService } from '../../../core/services';
import { Component, OnInit } from '@angular/core';
import { TabsConfig } from '../../types/tabsConfig.type';
import { appTabsConfig } from '../../../core/cosnstants';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    tabs: TabsConfig[] = [];
    isAuth = true;

    constructor(
        public routeService: RouteService,
        public loginService: LoginService
    ) {}

    ngOnInit(): void {
        this.tabs = appTabsConfig;
        this.isAuth = this.loginService.getIsLogin();
    }

    onRoute(path: string): void {
        this.routeService.route(path);
    }

    toggleLogin() {
        this.loginService.toggleLogin();
        this.isAuth = this.loginService.getIsLogin();
    }
}
