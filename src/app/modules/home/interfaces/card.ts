import { New } from './news';

type SelectedNewAttrs = 'author' | 'story_url' | 'created_at' | 'story_title' | 'objectID';

export type CardData = Partial<Pick<New, SelectedNewAttrs>> & { is_favorite?: boolean };
