require 'fuzzy_match'

class ContactsController < ApplicationController
      def index
        query = params[:search].to_s.strip.downcase
        all_contacts = Contact.all

        if query.present?
            matcher = FuzzyMatch.new(all_contacts, read: ->(contact) { "#{contact.name} #{contact.email}" })
            matched = matcher.find_all(query)
            render json: matched
        else
            render json: all_contacts
        end
      end
      def create
        contact = Contact.new(contact_params)
        if contact.save
          render json: contact, status: :created
        else
          render json: { errors: contact.errors.full_messages }, status: :unprocessable_entity
        end
      end
    
      def destroy
        contact = Contact.find(params[:id])
        contact.destroy
        render json: { message: "Deleted" }
      end
    
      private
    
      def contact_params
        params.require(:contact).permit(:name, :email)
      end
end
