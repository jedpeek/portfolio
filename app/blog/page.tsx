import React from "react";
import { ResizableDemo } from "../components/resizeable";

const Blog = () => {
  return (
    <div>
      <section className="bg-white text-zinc-900 py-8 sm:py-16">
        <div className="max-w-screen-lg mx-auto px-6 lg:px-16">
          <div className="mb-4">
            <h2 className="text-2xl font-bold">Related Articles</h2>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white flex flex-col sm:flex-row-reverse rounded-lg p-4 gap-4 border border-zinc-200 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-full sm:w-40 md:w-60 h-40 rounded-md overflow-hidden bg-zinc-100 relative">
                <img
                  alt="article-thumbnail"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="object-cover object-center"
                  sizes="100vw"
                  src="/assets/drums_01.jpg"
                />
              </div>
              <div className="flex-1 min-w-0 flex flex-col sm:flex-col-reverse px-2 sm:px-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-zinc-100 relative">
                    <img
                      alt="author-avatar"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="object-cover object-center"
                      sizes="100vw"
                      src="/assets/jp-sketch-removebg-preview.png"
                    />
                  </div>
                  <div>
                    <div className="uppercase text-xs text-zinc-500">
                      May 11, 2024
                    </div>
                    <p className="text-sm">
                      by <span className="font-medium">Jed Peek</span>
                    </p>
                  </div>
                </div>
                <div className="grow"></div>
                <div>
                  <h3 className="text-xl font-bold uppercase">
                    5 Ways to improve your Drum Mix
                  </h3>
                  <p className="text-base line-clamp-2 text-zinc-400">
                    Whether your tracking live drums or using programmed and
                    sampled drums, these tips will help your drums have impact
                    throughout your mix.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white flex flex-col sm:flex-row-reverse rounded-lg p-4 gap-4 border border-zinc-200 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-full sm:w-40 md:w-60 h-40 rounded-md overflow-hidden bg-zinc-100 relative">
                <img
                  alt="article-thumbnail"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="object-cover object-center"
                  sizes="100vw"
                  src="/assets/drums_01.jpg"
                />
              </div>
              <div className="flex-1 min-w-0 flex flex-col sm:flex-col-reverse px-2 sm:px-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-zinc-100 relative">
                    <img
                      alt="author-avatar"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="object-cover object-center"
                      sizes="100vw"
                      src="/assets/jp-sketch-removebg-preview.png"
                    />
                  </div>
                  <div>
                    <div className="uppercase text-xs text-zinc-500">
                      May 11, 2024
                    </div>
                    <p className="text-sm">
                      by <span className="font-medium">Jed Peek</span>
                    </p>
                  </div>
                </div>
                <div className="grow"></div>
                <div>
                  <h3 className="text-xl font-bold uppercase">
                    5 Ways to improve your Drum Mix
                  </h3>
                  <p className="text-base line-clamp-2 text-zinc-400">
                    Whether your tracking live drums or using programmed and
                    sampled drums, these tips will help your drums have impact
                    throughout your mix.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
