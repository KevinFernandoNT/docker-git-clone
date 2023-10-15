FROM node:14

WORKDIR /app

RUN apt-get install -y git

RUN mkdir /root/test/

RUN cd /root/test

RUN touch newFile.txt

COPY home/nuclei/Desktop/test/hello.txt /root/test/newFile.txt

RUN git clone git@github.com:KevinFernandoNT/docker-git-clone.git .

RUN npm install

EXPOSE 3000

VOLUME [ "/app" ]

CMD ["npm", "start"]
