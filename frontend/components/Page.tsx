import { Button, Card, CardBody } from "@nextui-org/react";
import React from "react";

export default function Page() {
  return (
    <section className="py-36">
      <div className="container flex flex-col items-center justify-center">
        {Array.from({ length: 10 }).map((_, index) => (
          <Card key={index} className="py-4 lg:w-3/4 xl:w-1/2 mt-4 mb-4">
            <CardBody className="overflow-visible py-2">
              <div className="flex gap-6">
                <div className="flex-1">
                  <h2 className="text-lg font-bold uppercase">
                    Article Subject {index + 1}
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
