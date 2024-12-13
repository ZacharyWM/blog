import { Button, Card, CardBody } from "@nextui-org/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="py-36">
      <div className="flex flex-col items-center justify-center">
        {Array.from({ length: 10 }).map((_, index) => (
          <Card key={index} className="py-4 w-3/4 xl:w-1/2 mt-4 mb-4">
            <CardBody className="overflow-visible py-2">
              <div className="flex gap-6">
                <div className="flex-1">
                  <Link to="/article">
                    <h2>Go to Sample Article</h2>
                  </Link>
                  <h2 className="text-lg font-bold uppercase">
                    Article Subjects - {index + 1}
                  </h2>
                  <p className="text-sm text-default-500">
                    This is about some super neat stuff.
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
}
