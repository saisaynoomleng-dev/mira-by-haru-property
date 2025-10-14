import { defineQuery } from 'next-sanity';

export const ALL_FLOOR_PLANS_QUERY = defineQuery(`*[_type == 'floorPlan' 
 && defined(slug.current)]
  | order(name desc){
    name,
    slug,
    bedroom,
    type,
    bathroom,
    price,
    mainImage{
      alt,
      asset->{url}
    },
    desc,
    features,
    squareFeet,
    subTitle
  }`);

export const ALL_BLOGS_QUERY = defineQuery(`*[_type == 'blog'
 && defined(slug.current)]
| order(publishedDate desc){
  name,
  subtitle,
  mainImage{
    alt,
    asset->{url}
  },
  subTitle,
  category,
  slug,
  publishedDate
}`);

export const ALL_TEAM_MEMBERS_QUERY = defineQuery(`*[_type == 'teamMember'
 && defined(slug.current)]
| order(name desc){
  name,
  position,
  slug,
  bio,
  mainImage{
    alt,
    asset->{url}
  },
  socialLink
}`);

export const ALL_NEIGHBORHOODS_QUERY = defineQuery(`*[_type == 'neighborhood'
 && defined(slug.current)]
|order(name desc){
  name,
  slug,
  mainImage{
    alt,
    asset->{url}
  },
  type,
  link
}`);

export const FLOOR_PLANS_QUERY = defineQuery(`*[_type == 'floorPlan' 
 && defined(slug.current)
 && (
  (!defined($filter))||
  $filter match type
 )
 ]
  | order(name desc){
    name,
    slug,
    bedroom,
    type,
    bathroom,
    price,
    mainImage{
      alt,
      asset->{url}
    },
    desc,
    features,
    squareFeet,
    subTitle
  }`);

export const FLOOR_PLAN_QUERY = defineQuery(`*[_type == 'floorPlan' 
 && slug.current == $slug]
  [0]{
    name,
    slug,
    bedroom,
    type,
    bathroom,
    price,
    mainImage{
      alt,
      asset->{url}
    },
    desc,
    features,
    squareFeet,
    subTitle
  }`);
