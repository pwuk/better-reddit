export interface MediaEmbed {
}

export interface SecureMediaEmbed {
    media_domain_url: string;
}

export interface Gildings {
}

export interface Source {
    url: string;
    width: number;
    height: number;
}

export interface Resolution {
    url: string;
    width: number;
    height: number;
}

export interface Variants {
}

export interface Image {
    source: Source;
    resolutions: Resolution[];
    variants: Variants;
    id: string;
}

export interface Preview {
    images: Image[];
    enabled: boolean;
}

export interface PostData {
    approved_at_utc?: any;
    subreddit: string;
    selftext: string;
    user_reports: any[];
    saved: boolean;
    mod_reason_title?: any;
    gilded: number;
    clicked: boolean;
    title: string;
    link_flair_richtext: any[];
    subreddit_name_prefixed: string;
    hidden: boolean;
    pwls: number;
    link_flair_css_class?: any;
    downs: number;
    thumbnail_height: number;
    top_awarded_type?: any;
    parent_whitelist_status: string;
    hide_score: boolean;
    name: string;
    quarantine: boolean;
    link_flair_text_color: string;
    upvote_ratio: number;
    author_flair_background_color?: any;
    subreddit_type: string;
    ups: number;
    total_awards_received: number;
    media_embed: MediaEmbed;
    thumbnail_width: number;
    author_flair_template_id: string;
    is_original_content: boolean;
    author_fullname: string;
    secure_media?: any;
    is_reddit_media_domain: boolean;
    is_meta: boolean;
    category?: any;
    secure_media_embed: SecureMediaEmbed;
    link_flair_text?: any;
    can_mod_post: boolean;
    score: number;
    approved_by?: any;
    author_premium: boolean;
    thumbnail: string;
    edited: any;
    author_flair_css_class: string;
    author_flair_richtext: any[];
    gildings: Gildings;
    post_hint: string;
    content_categories?: any;
    is_self: boolean;
    mod_note?: any;
    created: number;
    link_flair_type: string;
    wls: number;
    removed_by_category?: any;
    banned_by?: any;
    author_flair_type: string;
    domain: string;
    allow_live_comments: boolean;
    selftext_html?: any;
    likes?: any;
    suggested_sort?: any;
    banned_at_utc?: any;
    url_overridden_by_dest: string;
    view_count?: any;
    archived: boolean;
    no_follow: boolean;
    is_crosspostable: boolean;
    pinned: boolean;
    over_18: boolean;
    preview: Preview;
    all_awardings: any[];
    awarders: any[];
    media_only: boolean;
    can_gild: boolean;
    spoiler: boolean;
    locked: boolean;
    author_flair_text: string;
    treatment_tags: any[];
    visited: boolean;
    removed_by?: any;
    num_reports?: any;
    distinguished?: any;
    subreddit_id: string;
    mod_reason_by?: any;
    removal_reason?: any;
    link_flair_background_color: string;
    id: string;
    is_robot_indexable: boolean;
    num_duplicates: number;
    report_reasons?: any;
    author: string;
    discussion_type?: any;
    num_comments: number;
    send_replies: boolean;
    media?: any;
    contest_mode: boolean;
    author_patreon_flair: boolean;
    author_flair_text_color: string;
    permalink: string;
    whitelist_status: string;
    stickied: boolean;
    url: string;
    subreddit_subscribers: number;
    created_utc: number;
    num_crossposts: number;
    mod_reports: any[];
    is_video: boolean;
    link_id: string;
    replies: any;
    parent_id: string;
    body: string;
    is_submitter?: boolean;
    collapsed?: boolean;
    body_html: string;
    collapsed_reason?: any;
    associated_award?: any;
    score_hidden?: boolean;
    controversiality?: number;
    depth?: number;
    collapsed_because_crowd_control?: any;
}

export interface PostChild {
    kind: string;
    data: PostData;
}

export interface PostComment {
    kind: string;
    data: {
        body_html: string;
        author_flair_richtext: any[];
        saved: boolean;
        controversiality: number;
        body: string;
        total_awards_received: number;
        link_id: string; subreddit_id: string; subreddit: string; score: number; mod_reason_title?: string; is_submitter: boolean; can_gild: boolean; id: string; author_premium: boolean; locked: boolean; created_utc: number; likes?: string; banned_at_utc?: string; downs: number; edited: boolean; author: string; created: number; treatment_tags: any[]; author_flair_background_color?: string; report_reasons?: string; gildings: {}; approved_by?: string; score_hidden: boolean; replies: any; subreddit_name_prefixed: string; mod_reason_by?: string; parent_id: string; top_awarded_type?: string; approved_at_utc?: string; no_follow: boolean; name: string; ups: number; awarders: any[]; author_flair_type: string; permalink: string; author_flair_css_class?: string; num_reports?: string; mod_reports: any[]; gilded: number; author_patreon_flair: boolean; collapsed: boolean; collapsed_reason?: string; removal_reason?: string; mod_note?: string; send_replies: boolean; author_flair_text?: string; archived: boolean; author_flair_text_color?: string; can_mod_post: boolean; author_fullname: string; subreddit_type: string; user_reports: any[]; associated_award?: string; distinguished?: string; author_flair_template_id?: string; depth: number; stickied: boolean; all_awardings: any[]; collapsed_because_crowd_control?: string; banned_by?: string
    };
}

export interface Data {
    modhash: string;
    dist?: number;
    children: PostChild[];
    after?: any;
    before?: any;
}

export interface PostDetails {
    kind: string;
    data: Data;
}

export interface FormattedPost {
    post: PostData;
    comments: PostChild[];
}
