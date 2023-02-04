// noinspection SpellCheckingInspection,JSUnusedGlobalSymbols

export const isAssociation = (company: Company) => typeof company.complements?.identifiant_association === "string";
export const isMoralPerson = (leader: Leader) => leader.type_dirigeant === "personne morale";
export const isPhysicalPerson = (leader: Leader) => leader.type_dirigeant === "personne physique";


export interface Elected {
  "nom": string | undefined | null;
  "prenoms": string | undefined | null;
  "annee_de_naissance": string | undefined | null;
  "fonction": string | undefined | null;
  "sexe": string | undefined | null;
}

export interface Territorial {
  "code_insee": string | undefined | null;
  "code": string | undefined | null;
  "niveau": string | undefined | null;
  "elus": Elected[] | undefined | null;
}

export interface Complements {
  "collectivite_territoriale": Territorial[] | undefined | null;
  "convention_collective_renseignee": boolean | undefined | null;
  "est_entrepreneur_individuel": boolean | undefined | null;
  "est_entrepreneur_spectacle": boolean | undefined | null;
  "est_ess": boolean | undefined | null;
  "est_finess": boolean | undefined | null;
  "est_rge": boolean | undefined | null;
  "est_uai": boolean | undefined | null;
  "identifiant_association": string | undefined | null;
}

export interface Leader {
  "nom": string | undefined | null;
  "prenoms": string | undefined | null;
  "annee_de_naissance": string | undefined | null;
  "qualite": string | undefined | null;
  "type_dirigeant": string | undefined | null;
  "denomination": string | undefined | null;
  "sigle": unknown | undefined | null; //TODO: FIND TYPE (string?)
  "siren": string | undefined | null;
}

export interface Establishment {
  "activite_principale": string | undefined | null;
  "adresse": string | undefined | null;
  "code_postal": string | undefined | null;
  "est_siege": boolean | undefined | null;
  "etat_administratif": string | undefined | null;
  "geo_id": string | undefined | null;
  "latitude": number | undefined | null;
  "longitude": number | undefined | null;
  "liste_enseignes": string[] | undefined | null;
  "liste_finess": string[] | undefined | null;
  "liste_idcc": string[] | undefined | null;
  "liste_rge": string[] | undefined | null;
  "liste_uai": string[] | undefined | null;
  "nom_commercial": unknown | undefined | null; //TODO: FIND TYPE (string?)
  "siret": string | undefined | null;
}

export interface Seat {
  "activite_principale": string | undefined | null;
  "activite_principale_registre_metier": unknown | undefined | null; //TODO: FIND TYPE (string?)
  "adresse": string | undefined | null;
  "cedex": unknown | undefined | null; //TODO: FIND TYPE (string?)
  "code_pays_etranger": unknown | undefined | null; //TODO: FIND TYPE (string?)
  "code_postal": string | undefined | null;
  "commune": string | undefined | null;
  "complement_adresse": string | undefined | null;
  "date_creation": string | undefined | null;
  "date_debut_activite": string | undefined | null;
  "departement": string | undefined | null;
  "distribution_speciale": unknown | undefined | null; //TODO: FIND TYPE (string?)
  "est_siege": boolean | undefined | null;
  "etat_administratif": string | undefined | null;
  "geo_id": string | undefined | null;
  "indice_repetition": unknown | undefined | null; //TODO: FIND TYPE (string?number?)
  "latitude": number | undefined | null;
  "longitude": number | undefined | null;
  "libelle_cedex": unknown | undefined | null; //TODO: FIND TYPE (string?)
  "libelle_commune": string | undefined | null;
  "libelle_commune_etranger": unknown | undefined | null; //TODO: FIND TYPE (string?)
  "libelle_pays_etranger": unknown | undefined | null; //TODO: FIND TYPE (string?)
  "libelle_voie": string | undefined | null;
  "liste_enseignes": string[] | undefined | null;
  "liste_finess": string[] | undefined | null;
  "liste_idcc": string[] | undefined | null;
  "liste_rge": string[] | undefined | null;
  "liste_uai": string[] | undefined | null;

  "nom_commercial": unknown | undefined | null; //TODO: FIND TYPE (string?)
  "numero_voie": string | undefined | null;
  "siret": string | undefined | null;
  "tranche_effectif_salarie": string | undefined | null;
  "type_voie": string | undefined | null;
}

export interface Company {
  "siren": string | undefined | null;
  "nom_complet": string | undefined | null;
  "nombre_etablissements": number | undefined | null;
  "nombre_etablissements_ouverts": number | undefined | null;
  "siege": Seat | undefined | null;
  "date_creation": string | undefined | null;
  "tranche_effectif_salarie": string | undefined | null;
  "date_mise_a_jour": string | undefined | null;
  "categorie_entreprise": string | undefined | null;
  "etat_administratif": string | undefined | null;
  "nom_raison_sociale": string | undefined | null;
  "nature_juridique": string | undefined | null;
  "activite_principale": string | undefined | null;
  "section_activite_principale": string | undefined | null;
  "matching_etablisssements": Establishment[] | undefined | null;
  "dirigeants": Leader[] | undefined | null;
  "complements": Complements | undefined | null;
}