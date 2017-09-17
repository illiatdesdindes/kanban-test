class CreateApplicants < ActiveRecord::Migration[5.1]
  def change
    create_table :applicants do |t|
      t.references :stage, foreign_key: true
      t.string :name
      t.string :job
      t.string :avatar

      t.timestamps
    end
  end
end
