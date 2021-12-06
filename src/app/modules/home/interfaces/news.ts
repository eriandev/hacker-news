export interface NewsResponse {
  hits: New[];
  nbHits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
  exhaustiveNbHits: boolean;
  exhaustiveTypo: boolean;
  query: string;
  params: string;
  renderingContent: RenderingContent;
  processingTimeMS: number;
}

export interface New {
  created_at: string;
  title: null | string;
  url: null;
  author: string;
  points: number | null;
  story_text: null | string;
  comment_text: null | string;
  num_comments: number | null;
  story_id: number | null;
  story_title: null | string;
  story_url: null | string;
  parent_id: number | null;
  created_at_i: number;
  _tags: string[];
  objectID: string;
  _highlightResult: HighlightResult;
}

interface HighlightResult {
  author: Author;
  comment_text?: Author;
  story_title?: Author;
  story_url?: Author;
  title?: Author;
  story_text?: Author;
}

interface Author {
  value: string;
  matchLevel: MatchLevel;
  matchedWords: any[];
}

enum MatchLevel {
  None = 'none',
}

interface RenderingContent {}
