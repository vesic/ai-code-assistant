provider "aws" {
  region = "eu-central-1"
}

resource "aws_security_group" "web_app" {
  ingress {
    description = "Allow Port 80"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    cidr_blocks = [
      "0.0.0.0/0"
    ]
    from_port = 22
    to_port   = 22
    protocol  = "tcp"
  }

  egress {
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }
}

resource "aws_instance" "web-app" {
  ami                    = "ami-0e04bcbe83a83792e"
  instance_type          = "t2.micro"
  vpc_security_group_ids = [aws_security_group.web_app.id]

  user_data = file("web-app.yaml")

  tags = {
    Name = "web-app"
  }
}
