export interface RepositoryResponse {
  totalCount: number;
  edges: RepositoryEdge[];
  pageInfo: PageInfo;
}

export interface RepositoryEdge {
  node: RepositoryNode;
  cursor: string;
}

export interface RepositoryNode {
  id: string;
  fullName: string;
  reviewCount: number;
  ratingAverage: number;
  forksCount: number;
  stargazersCount: number;
  description: string;
  language: string;
  ownerAvatarUrl: string;
  url?: string;
  reviews?: Reviews;
}

export interface PageInfo {
  hasNextPage: boolean;
  hasPreviousPage?: boolean;
  startCursor: string;
  endCursor: string;
}

export interface Reviews {
  edges: ReviewsEdge[];
}

export interface ReviewsEdge {
  node: ReviewsNode;
}

export interface ReviewsNode {
  id: string;
  text: string;
  rating: number;
  createdAt: Date;
  user: User;
  repository: {fullName: string, id: string}
}

export interface User {
  id: string;
  username: string;
}
