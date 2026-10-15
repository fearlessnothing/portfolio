import { getCollection } from 'astro:content';

/** Case studies sorted by their `order` frontmatter (lowest first), then by title. */
export async function getSortedCaseStudies() {
  const studies = await getCollection('case-studies');
  return studies.sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
}
