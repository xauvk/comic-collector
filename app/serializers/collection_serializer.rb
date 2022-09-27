class CollectionsSerializer < ActiveModel::Serializer
  attributes :id, :status, :rating
  belongs_to :issue
  belongs_to :user
end
