import { Component, OnInit } from '@angular/core';
import {
    ActivatedRoute,
    NavigationCancel,
    NavigationEnd,
    NavigationError,
    NavigationStart,
    Router,
} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    layout = '';
    loading = false;

    constructor(private router: Router, private route: ActivatedRoute) {}

    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationError && event.error.status === 404) {
                this.router.navigate(['/404']);
            } else if (event instanceof NavigationEnd) {
                let routeData: { [key: string]: string } = {};
                let currentRoute: ActivatedRoute | null = this.route.root;

                while (currentRoute) {
                    routeData = Object.assign(routeData, currentRoute.snapshot.data);
                    currentRoute = currentRoute.firstChild;
                }

                this.layout = routeData['layout'] || 'public';
            }

            if (event instanceof NavigationStart) {
                this.loading = true;
            } else if (
                event instanceof NavigationEnd ||
                event instanceof NavigationCancel ||
                event instanceof NavigationError
            ) {
                this.loading = false;
            }
        });
    }
}
