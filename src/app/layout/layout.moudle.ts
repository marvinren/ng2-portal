import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";

import {NavigationModule} from "./navigation/navigation.module";
import {TopnavbarModule} from "./topnavbar/topnavbar.module";
import {FooterModule} from "./footer/footer.module";

import {basicComponent} from "./main/basic.component";
import {blankComponent} from "./main/blank.component";

@NgModule({
    declarations: [blankComponent,basicComponent],
    imports     : [BrowserModule, RouterModule, NavigationModule, TopnavbarModule, FooterModule],
    exports     : [blankComponent,basicComponent]
})
export class LayoutsModule {}