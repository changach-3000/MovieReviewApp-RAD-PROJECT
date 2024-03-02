class CreateMovies < ActiveRecord::Migration[7.0]
  def change
    create_table :movies do |t|
      t.string :backgroundImg
      t.string :cardImg
      t.string :description
      t.string :subTitle
      t.string :title
      t.string :titleImg
      t.string :type

      t.timestamps
    end
  end
end
