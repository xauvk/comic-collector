class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :collections, serializer: UserCollectionSerializer
  has_many :issues
end
