import { defineQuery } from 'next-sanity';

export const ALL_FLOOR_PLANS_QUERY = defineQuery(`*[_type == 'floorPlan' 
 && defined(slug.current)]
  | order(name desc){
    name,
    slug,
    bedroom,
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
