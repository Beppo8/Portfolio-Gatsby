import React from 'react';
import stack from '../imgs/stack.jpg';
import python from '../imgs/django.jpg';
import gatsby from '../imgs/gastby.png';

export default () => (
  <div className="max-w-4xl mx-auto bottom-auto mt-12">
    <header className="text-center">
      <h2 className="text-3xl font-bold">My personal projects</h2>
    </header>

    <div class="flex mt-16 mb-4">
      <div class="w-1/3  h-12">
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            class="w-full"
            src={stack}
            alt="Sunset in the mountains"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">MEAN stack</div>
            <p class="text-gray-700 text-base">
              Webapp made with Angular, Express and MongoDB,Social media with timeline,messages and auth
            </p>
          </div>
          <div class="px-6 py-4">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #Angular
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #MongoDB
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              #Nodejs
            </span>
          </div>
            <div className="mt-4 mb-6 text-center">
                <a href="https://github.com/Beppo8" className="btn" target="_blank" rel="noopener noreferrer">Ver repositorio</a>
            </div>
        </div>
      </div>

      <div class="w-1/3 mx-24 h-12">
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            class="w-full"
            src={python}
            alt="Sunset in the mountains"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Django E-commerce</div>
            <p class="text-gray-700 text-base">
              Webapp made with framework Django,with best practices,using Stripe API
            </p>
          </div>
          <div class="px-6 py-4">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #Python
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #Jinja2
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              #Stripe
            </span>
          </div>
            <div className="mt-4 mb-6 text-center">
                <a href="https://github.com/Beppo8" className="btn" target="_blank" rel="noopener noreferrer">Ver repositorio</a>
            </div>
        </div>
      </div>

      <div class="w-1/3 h-12">
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            class="w-full"
            src={gatsby}
            alt="Sunset in the mountains"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Personal Portfolio</div>
            <p class="text-gray-700 text-base">
              My personal website made wiht Gatsbyjs
            </p>
          </div>
          <div class="px-6 py-4">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #React
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #JAMStack
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              #Gaphgql
            </span>
          </div>
            <div className="mt-4 mb-6 text-center">
                <a href="https://github.com/Beppo8" className="btn" target="_blank" rel="noopener noreferrer">Ver repositorio</a>
            </div>
        </div>
      </div>
    </div>

  </div>
)