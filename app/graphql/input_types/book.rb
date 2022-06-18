class InputTypes::Book < Types::BaseInputObject
  graphql_name 'BookAttributes' # ObjectTypes::Bookと名前がバッティングしないようにする

  argument :title, String, required: true
end
