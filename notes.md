**Date Time Format**
`export const formatDate = (date: string) => {
const d = new Date(date);
const hasTime = date.includes('T') || date.match(/\d{2}:\d{2}/);

const options: Intl.DateTimeFormatOptions = hasTime
? {
weekday: 'long',
day: '2-digit',
month: 'short',
year: 'numeric',
}
: {
weekday: 'long',
day: '2-digit',
month: 'short',
year: 'numeric',
hour: 'numeric',
hour12: true,
minute: '2-digit',
};
return d.toLocaleDateString('en-US', options);
};`

---

**Add date to Slug**
`defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (rule) => rule.required(),
      options: {
        source: (document) => `${document.name}-${document.date}`,
      },
    }),`

---

**Number Format**
`export const formatSquareFeet = (squareFeet: number) => {
  return new Intl.NumberFormat('en-US', {
    maximumSignificantDigits: 3,
  }).format(squareFeet);
};`

---
