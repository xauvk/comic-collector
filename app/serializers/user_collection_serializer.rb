class UserCollectionSerializer < ActiveModel::Serializer
  attributes :id, :issue_id, :status, :rating
  belongs_to :issue
end
