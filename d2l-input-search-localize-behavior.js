import 'd2l-localize-behavior/d2l-localize-behavior.js';

window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.Search = window.D2L.PolymerBehaviors.Search || {};

/** @polymerBehavior D2L.PolymerBehaviors.Search.LocalizeBehavior */
D2L.PolymerBehaviors.Search.LocalizeBehaviorImpl = {
	properties: {
		/**
		 * Localization resources.
		 */
		resources: {
			value: function() {
				return {
					'ar': {
						'search': 'بحث',
						'search.clear': 'مسح البحث'
					},
					'en': {
						'search': 'Search',
						'search.clear': 'Clear Search'
					},
					'es': {
						'search': 'Buscar',
						'search.clear': 'Borrar búsqueda'
					},
					'fr': {
						'search': 'Rechercher',
						'search.clear': 'Effacer la recherche'
					},
					'ja': {
						'search': '検索',
						'search.clear': '検索のクリア'
					},
					'ko': {
						'search': '검색',
						'search.clear': '검색 지우기'
					},
					'nl': {
						'search': 'Zoeken',
						'search.clear': 'Zoekopdracht wissen'
					},
					'pt': {
						'search': 'Pesquisar',
						'search.clear': 'Limpar Pesquisa'
					},
					'sv': {
						'search': 'Sökning',
						'search.clear': 'Rensa sökning'
					},
					'tr': {
						'search': 'Ara',
						'search.clear': 'Aramayı Temizle'
					},
					'zh': {
						'search': '搜索',
						'search.clear': '清除搜索'
					},
					'zh-tw': {
						'search': '搜尋',
						'search.clear': '清除搜尋'
					}
				};
			}
		}
	}
};

/** @polymerBehavior D2L.PolymerBehaviors.Search.LocalizeBehavior */
D2L.PolymerBehaviors.Search.LocalizeBehavior = [
	D2L.PolymerBehaviors.LocalizeBehavior,
	D2L.PolymerBehaviors.Search.LocalizeBehaviorImpl
];
