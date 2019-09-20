import { Component, ViewChild, ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router, NavigationStart } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

export interface ItemMenu {
  label: string;
  componente: string;
  icon: string;
}
@Component({
  selector: 'pmmg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, OnInit {
  @ViewChild('snav') snav;
  title = 'Painel Administrativo';
  mobileQuery: MediaQueryList;
  opened: boolean;

  fillerNav: Array<ItemMenu>;
  itemSelecionado: ItemMenu;

  private _mobileQueryListener: () => void;

  constructor(private router: Router, media: MediaMatcher,
    changeDetectorRef: ChangeDetectorRef, private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit(): void {

    // CRIAR ÍCONES SVG
    this.matIconRegistry.addSvgIcon('send', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/send.svg'));
    this.matIconRegistry.addSvgIcon('in', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/in.svg'));
    this.matIconRegistry.addSvgIcon('out', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/out.svg'));
    this.matIconRegistry.addSvgIcon('pasta', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/pasta.svg'));
    this.matIconRegistry.addSvgIcon('lixeira', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/lixeira.svg'));

    this.opened = true;
    this.inicializarMenuLateral();

  }

  private inicializarMenuLateral() {
    this.fillerNav = new Array<ItemMenu>();
    this.fillerNav.push({
      componente: '/enviar',
      label: 'Enviar Mensagens',
      icon: 'assets/images/send.svg'
    });
    this.fillerNav.push({
      componente: '/caixas',
      label: 'Caixas de Mensagem',
      icon: 'assets/images/mail.svg'
    });
    this.fillerNav.push({
      componente: '/grupos',
      label: 'Grupos',
      icon: 'assets/images/grupo.svg'
    });
    this.fillerNav.push({
      componente: '/processos',
      label: 'Processos',
      icon: 'assets/images/processos.svg'
    });
    this.fillerNav.push({
      componente: '/configuracoes',
      label: 'Configuração',
      icon: 'assets/images/settings2.svg'
    });
  }

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  selecionarItemMenu() {
    if (this.mobileQuery.matches) {
      this.snav.toggle();
    }
  }

}
