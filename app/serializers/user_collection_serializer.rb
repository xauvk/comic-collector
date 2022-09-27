class UserCollectionSerializer < ActiveModel::Serializer
  attributes :id, :status, :rating
  belongs_to :issue
end
