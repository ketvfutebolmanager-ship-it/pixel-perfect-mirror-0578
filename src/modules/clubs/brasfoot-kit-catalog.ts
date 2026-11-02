/**
 * Inventário do pacote Brasfoot "Atualização Brasileirão 2023 - BF22-23".
 * Os nomes abaixo são os arquivos PNG encontrados em teams/camisas/.
 * Atenção: são artes-base de 2023, NÃO uniformes oficiais da temporada 2026.
 * Os assets binários ainda precisam ser incorporados em public/kits/brasfoot-2023/.
 */
export type KitArchiveEntry = {
  club: string;
  archiveFile: string;
  archiveSeason: 2023;
  currentOfficialKit: false;
};

export const BRASFOOT_2023_KIT_ARCHIVE: KitArchiveEntry[] = [
  ["ABC","abcrn_bra.png"],["Altos","altos_pi.png"],["Amazonas","amazonas_am.png"],
  ["América Mineiro","americamg_bra.png"],["América-RN","americarn.png"],["Anápolis","anapolisgo_bra.png"],
  ["Aparecidense","aparecidense_go.png"],["ASA","asaarapiracaal_bra.png"],["Atlético-BA","atleticoalagoinhas_bra.png"],
  ["Atlético-CE","atleticoce_bra.png"],["Atlético Goianiense","atleticogo_bra.png"],["Atlético Mineiro","atleticomg_bra.png"],
  ["Athletico Paranaense","atleticopr_bra.png"],["Avaí","avai_bra.png"],["Bahia","bahia.png"],
  ["Botafogo da Paraíba","botafogopb_bra.png"],["Botafogo","botafogorj_bra.png"],["Botafogo de Ribeirão Preto","botafogosp_bra.png"],
  ["Red Bull Bragantino","bragantino_bra.png"],["Brasiliense","Brasiliense_bra.png"],["Brasil-RS","brasilpelotas_bra.png"],
  ["Brusque","brusquesc_bra.png"],["FC Cascavel","cascavel_pr.png"],["Caxias","caxias.png"],
  ["Ceará","ceara_bra.png"],["Ceilândia","Ceilândia_bra.png"],["Chapecoense","chapecoense_bra.png"],
  ["Confiança","confianca_se.png"],["Corinthians","corinthians_bra.png"],["Coritiba","coritiba_bra.png"],
  ["CRB","crb_bra.png"],["Criciúma","criciuma_bra.png"],["Cruzeiro","cruzeiro_bra.png"],
  ["CSA","csa_bra.png"],["Cuiabá","cuiaba_bra.png"],["Ferroviária","ferroviaria_sp.png"],
  ["Ferroviário","ferroviarioce_bra.png"],["Figueirense","figueirense.png"],["Floresta","florestace.png"],
  ["Fluminense-PI","Fluminense-PI_bra.png"],["Fluminense","flurj.png"],["Fortaleza","fortaleza.png"],
  ["Goiás","goias.png"],["Grêmio","gremio.png"],["Guarani","guaranisp_bra.png"],
  ["Humaitá","Humaitá_bra.png"],["Iguatu","iguatu_ce.png"],["Inter de Limeira","interlimeirasp_bra.png"],
  ["Internacional","internacional_bra.png"],["Ituano","ituano_sp.png"],["Jacuipense","jacuipense_bra.png"],
  ["Juventude","juventude.png"],["Londrina","londrina_pr.png"],["Manaus","manaus_bra.png"],
  ["Maranhão","maranhao_ma.png"],["Mirassol","miirassol_sp.png"],["Náutico","nautico.png"],
  ["Nova Iguaçu","novaiguacu_rj.png"],["Novorizontino","novorinzontino_sp.png"],["Operário-MT","operariovg_mt.png"],
  ["Operário Ferroviário","operario_pr.png"],["Palmeiras","palmeiras.png"],["Paysandu","paysandu.png"],
  ["Ponte Preta","pontepreta_bra.png"],["Portuguesa-RJ","portuguesarj_bra.png"],["Pouso Alegre","pousoalegre_mg.png"],
  ["Real Noroeste","Real Noroeste_bra.png"],["Remo","remo.png"],["Retrô","retrope_bra.png"],
  ["Sampaio Corrêa-MA","samapaiocorrea_ma.png"],["Santa Cruz","santa.png"],["Santo André","santoandre_sp.png"],
  ["Santos","santos.png"],["São Bernardo","saobernardo_sp.png"],["São José-RS","saojosers_bra.png"],
  ["São Paulo","saopaulo_bra.png"],["Sergipe","sergipe_se.png"],["Sousa","sousapb_bra.png"],
  ["Sport Recife","sport.png"],["São Raimundo-RR","São Raimundo RR_bra.png"],["Tocantinópolis","Tocantinópolis_bra.png"],
  ["Tombense","tombense_mg.png"],["Trem","Trem_bra.png"],["Tuna Luso","tunaluso_pa.png"],
  ["União Rondonópolis","uniaorondonopolis_mt.png"],["Vasco da Gama","vasco.png"],["Vila Nova","vilago.png"],
  ["Vitória","vitoria.png"],["Vitória-ES","Vitória ES_bra.png"],["Volta Redonda","voltaredondarj_bra.png"],
  ["Ypiranga","ypiranga_rs.png"],
].map(([club, archiveFile]) => ({
  club: club as string,
  archiveFile: archiveFile as string,
  archiveSeason: 2023 as const,
  currentOfficialKit: false as const,
}));

/** Fornecedores de material esportivo confirmados para a Série A de 2026. */
export const OFFICIAL_KIT_SUPPLIERS_2026: Record<string, string> = {
  "Athletico Paranaense": "Umbro",
  "Atlético Mineiro": "Nike",
  Bahia: "Puma",
  Botafogo: "Reebok",
  Chapecoense: "Kappa",
  Corinthians: "Nike",
  Coritiba: "Diadora",
  Cruzeiro: "Adidas",
  Flamengo: "Adidas",
  Fluminense: "Puma",
  Grêmio: "Umbro",
  Internacional: "Adidas",
  Mirassol: "Athleta",
  Palmeiras: "Puma",
  "Red Bull Bragantino": "Puma",
  Remo: "Volt",
  Santos: "Umbro",
  "São Paulo": "New Balance",
  "Vasco da Gama": "Nike",
  Vitória: "Volt",
};

/**
 * Patrocínio master observado em outubro/2026 após as mudanças regulatórias.
 * "A confirmar" significa que a marca não foi consolidada como permanente.
 */
export const MASTER_SPONSOR_STATUS_2026: Record<string, string> = {
  Flamengo: "Espaço master em transição",
  Corinthians: "Shopee (acordo até o fim de 2026)",
  "São Paulo": "Aplicativo de estatísticas (uso temporário)",
  Palmeiras: "Espaço master em transição",
  "Atlético Mineiro": "GaloBank / marcas institucionais em rodízio",
  Botafogo: "Camisa 7",
  Fluminense: "Aplicativo de estatísticas (uso temporário)",
  "Vasco da Gama": "Sócio Gigante / espaço em transição",
  Grêmio: "Sem patrocinador master confirmado",
  Cruzeiro: "Sem patrocinador master confirmado",
  Santos: "Agibank",
  Vitória: "Sem patrocinador master confirmado",
  Remo: "A confirmar",
  Chapecoense: "A confirmar",
  "Athletico Paranaense": "Patrocínio pontual / espaço em transição",
  Bahia: "Sem patrocinador master confirmado",
  Coritiba: "A confirmar",
  Internacional: "Patrocínio pontual / espaço em transição",
  Mirassol: "Guaraná Poty",
  "Red Bull Bragantino": "Red Bull",
};

export function getArchivedBrasfootKit(club: string): KitArchiveEntry | undefined {
  return BRASFOOT_2023_KIT_ARCHIVE.find((entry) => entry.club === club);
}
