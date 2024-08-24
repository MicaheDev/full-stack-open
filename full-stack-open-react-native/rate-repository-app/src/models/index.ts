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
}

export interface PageInfo {
  hasNextPage: boolean;
  hasPreviousPage?: boolean;
  startCursor: string;
  endCursor: string;
}
