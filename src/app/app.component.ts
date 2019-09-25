import { Component, ViewChild, ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router, NavigationStart } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

export interface ItemMenu {
  label: string;
  componente: string;
  icon: string;
  iconOn: string;
  iconSize: number;
  count: number;
}
@Component({
  selector: 'pmmg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, OnInit {
  @ViewChild('snav') snav;
  title = `Painel Administrativo`;
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
    this.matIconRegistry.addSvgIcon('check', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/check.svg'));
    this.matIconRegistry.addSvgIcon('in', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/in.svg'));
    this.matIconRegistry.addSvgIcon('out', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/out.svg'));
    this.matIconRegistry.addSvgIcon('pasta', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/pasta.svg'));
    this.matIconRegistry.addSvgIcon('lixeira', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/lixeira.svg'));

    this.opened = true;
    this.inicializarMenuLateral();

  }

  private inicializarMenuLateral() {
    this.fillerNav = new Array<ItemMenu>();
    const iconSize = 22;

    this.fillerNav.push({
      componente: '/enviar',
      label: 'Enviar Mensagens',
      icon: 'assets/images/plus-off.svg',
      count: undefined,
      iconSize: iconSize,
      iconOn: 'assets/images/plus-on.svg'
    });

    this.fillerNav.push({
      componente: '/caixas/entrada',
      label: 'Caixas de Entrada',
      count: 27,
      icon: 'assets/images/envelope.svg',
      iconSize: iconSize,
      iconOn: 'assets/images/envelope2.svg'
    });

    this.fillerNav.push({
      componente: '/caixas/entrada',
      label: 'Caixas de Saída',
      count: 7,
      iconSize: iconSize,
      icon: 'assets/images/send.svg',
      iconOn: 'assets/images/send-on2.svg'
    });

    this.fillerNav.push({
      componente: '/caixas/entrada',
      label: 'Arquivo',
      count: 3,
      iconSize: iconSize,
      icon: 'assets/images/archive.svg',
      iconOn: 'assets/images/archive-on.svg'
    });

    this.fillerNav.push({
      componente: '/grupos',
      count: undefined,
      label: 'Grupos',
      iconSize: iconSize,
      icon: 'assets/images/group2.svg',
      iconOn: 'assets/images/group-on.svg'
    });

    this.fillerNav.push({
      componente: '/processos',
      label: 'Processos',
      count: undefined,
      iconSize: iconSize,
      icon: 'assets/images/flow.svg',
      iconOn: 'assets/images/flow-on.svg'
    });

    this.fillerNav.push({
      componente: '/configuracoes',
      label: 'Configuração',
      count: undefined,
      iconSize: iconSize,
      icon: 'assets/images/settings.svg',
      iconOn: 'assets/images/settings-on.svg'
    });

    // TODO atualizar por rota
    this.itemSelecionado = this.fillerNav[1];

  }

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  selecionarItemMenu(item) {
    this.itemSelecionado = item;
    if (this.mobileQuery.matches) {
      this.snav.toggle();
    }
  }

}
