export interface User {
  avatar_url: string;
  bio: string;
  blog: string;
  company: string;
  created_at: string;
  email: string;
  events_url: string;
  followers: number;
  followers_url: string;
  following: number
  gravatar_id: string;
  html_url: string;
  location: string;
  login: string;
  name: string;
  node_id: string;
  organizations_url: string;
  public_gists: number
  public_repos: number
  received_events_url: string;
  repos_url: string;
  site_admin: false
  starred_url: string;
  subscriptions_url: string;
  twitter_username: string;
  type: string;
  updated_at: string;
  url: string;
}

export function newUser(): User {
  return (
    {
      avatar_url: '',
      bio: '',
      blog: '',
      company: '',
      created_at: '',
      email: '',
      events_url: '',
      followers: 0,
      followers_url: '',
      following: 0,
      gravatar_id: '',
      html_url: '',
      location: '',
      login: '',
      name: '',
      node_id: '',
      organizations_url: '',
      public_gists: 0,
      public_repos: 0,
      received_events_url: '',
      repos_url: '',
      site_admin: false,
      starred_url: '',
      subscriptions_url: '',
      twitter_username: '',
      type: '',
      updated_at: '',
      url: ''
    }
  )
}